const cityNames = [
    "Barborn",
    "Eaglefront",
    "Rivercoast",
    "Oceanshore",
    "Maplehost",
    "Winterhaven",
    "Blindpoint",
    "Basinland",
    "Silentmoor",
    "Kilwood",
    "Snowscar",
    "Falsebrook",
    "Demonguard",
    "Bonestorm",
    "Ragepoint",
    "Littlemond",
    "Boulderfall",
    "Whiteglen",
    "Fairhall",
    "Castlelight",
    "Steelmore",
    "Rockrun",
    "Angelfort",
    "Quickwell",
    "Darkfrost",
    "Grassmeadow",
    "Deadcairn",
    "Rosedenn",
    "Windrun",
]




const randCityName = () => {
    rand = Math.floor(Math.random() * cityNames.length)
    return cityNames[rand]
}