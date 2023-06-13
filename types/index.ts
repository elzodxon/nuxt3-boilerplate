export interface Beer {
    "id": number,
    "name": string,
    "tagline": string,
    "first_brewed": string,
    "description": string,
    "image_url": string,
    "abv": number,
    "ibu":number,
    "target_fg": number,
    "target_og": number,
    "ebc":number,
    "srm":number,
    "ph": number,
    "attenuation_level": number,
    "volume": IUnit,
    "boil_volume": IUnit,
    "method": {
        "mash_temp": IMethod[],
        "fermentation": {
            "temp": IUnit
        },
        "twist": string
    },
    "ingredients": {
        "malt": IIngredient[],
        "hops": IIngredientHops[],
        "yeast": string
    },
    "food_pairing": string[],
    "brewers_tips": string,
    "contributed_by": string
}

interface IUnit {
    value: number,
    unit: string
}

interface IMethod{
    "temp": IUnit,
    "duration": number
}

interface IIngredient {
    "name": string,
    "amount": IUnit
}

interface IIngredientHops extends IIngredient {
    "add": string,
    "attribute": string
}