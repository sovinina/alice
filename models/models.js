import db from "../db.js"
import {DataTypes} from "sequelize"

const People = db.define('people', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.STRING, allowNull: false},
    address:{type:DataTypes.STRING, allowNull: false},
    latitude:{type:DataTypes.FLOAT, allowNull: false},
    longitude:{type:DataTypes.FLOAT, allowNull: false},
    distance:{type:DataTypes.VIRTUAL, get(){
            return /*(*/6371*Math.acos(Math.sin(this.latitude*(Math.PI/180))*Math.sin(59.907659*(Math.PI/180))+Math.cos(this.latitude*(Math.PI/180))*Math.cos(59.907659*(Math.PI/180))*Math.cos((30.293015-this.longitude)*(Math.PI/180)))/*).toFixed(2)+" км"*/;
        }}
})

const Clues = db.define('clues', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    evidence: {type: DataTypes.STRING, allowNull: false},
    witness_statements:{type:DataTypes.STRING, allowNull: false},
    alibi:{type:DataTypes.STRING, allowNull: false},
    statements:{type:DataTypes.STRING, allowNull: false}
})

const Motives = db.define('motives', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    relationship: {type: DataTypes.STRING, allowNull: false},
    quarrels:{type:DataTypes.STRING, allowNull: false},
    motive:{type:DataTypes.STRING, allowNull: false},
    date:{type:DataTypes.STRING, allowNull: false}
})

People.hasOne(Clues)
Clues.belongsTo(People)
People.hasOne(Motives)
Motives.belongsTo(People)
export default {
    People, Clues, Motives
}