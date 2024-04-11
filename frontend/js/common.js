window.map = null;
async function points(){

    let response = await fetch("http://localhost:5050/api/people/", { method:'GET'});
    if (response.ok) {
        let json = await response.json();
        let i = 0
        while (i < json.count) {
            POINTS.push({coordinates: [json.rows[i].longitude, json.rows[i].latitude], title:json.rows[i].name})
            i++
        }
    } else {
        alert("Ошибка HTTP: " + response.status);
    }

}
points()
setTimeout(()=>main(),10)


async function main() {
    await ymaps3.ready;
    const {YMap, YMapDefaultSchemeLayer, YMapMarker, YMapControls, YMapDefaultFeaturesLayer} = ymaps3;

    const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
    const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

    map = new YMap(document.getElementById('app'), {location: LOCATION});

    map.addChild((scheme = new YMapDefaultSchemeLayer()));
    map.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));
    map.addChild(new YMapDefaultFeaturesLayer({id: 'features'}));

    POINTS.forEach((point) => {
        if (point.element) {
            map.addChild(new YMapMarker(point, point.element(point)));
        } else {
            map.addChild(new YMapDefaultMarker(point));
        }
    });

    document.querySelector('#submit').addEventListener('click', function(){
        setTimeout(()=> location.reload(), 100)

    })


}

const LOCATION = {center: [30.313150, 59.915833], zoom: 14};

let POINTS = [
    {
        coordinates: [30.293015, 59.907659],
        title:"Алиса",
        color: '#3b5998',
    }
];

