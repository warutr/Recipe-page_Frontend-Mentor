import React from "react";

function page() {
  return (
    <div className="bg-white md:p-10 md:rounded-3xl">
      <div className="flex flex-col justify-center ">
        <img
          src="image-omelette.jpeg"
          alt="omelette"
          className="md:rounded-md"
        />
      </div>
      <div className="px-4 py-0 md:px-0">
        <div className="pt-4">
          <h1 className="font-Young_Serif font-bold text-5xl">
            Simple Omelette Recipe
          </h1>
          <p className="py-4">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div className="bg-[#fff5fa] p-6 rounded-md">
            <h2 className="text-2xl text-[#77274c] font-Young_Serif font-normal">
              Preparation time
            </h2>
            <ul className="list-disc list-inside pt-2">
              <li className="mt-2 text-[#77274c]">
                <span className="font-bold text-black">Total</span> :
                Approximately 10 minutes
              </li>
              <li className="mt-2 text-[#77274c]">
                <span className="font-bold text-black"> Preparation</span>: 5
                minutes
              </li>
              <li className="mt-2 text-[#77274c]">
                <span className="font-bold text-black">Cooking</span> : 5
                minutes
              </li>
            </ul>
          </div>
          <div className="pt-5">
            <h2 className="text-2xl text-[#854632] font-Young_Serif font-normal">
              Ingredients
            </h2>
            <ul className="list-disc list-inside pt-2">
              <li className="mt-2 text-[#854632]">
                <span className="text-black">2-3 large eggs</span>
              </li>
              <li className="mt-2 text-[#854632]">
                <span className="text-black">Salt, to taste</span>
              </li>
              <li className="mt-2 text-[#854632]">
                <span className="text-black">Pepper, to taste</span>
              </li>
              <li className="mt-2 text-[#854632] ">
                <span className="text-black">
                  1 tablespoon of butter or oil
                </span>
              </li>
              <li className="mt-2 text-[#854632] ">
                <span className=" text-black ">
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </span>
              </li>
            </ul>
          </div>
          <hr className="mt-8" />
          <div className="pt-8">
            <h2 className="text-2xl text-[#854632] font-Young_Serif font-normal">
              Instructions
            </h2>
            <div>
              <div className="flex mt-2">
                <div className="text-[#854632]">1.</div>
                <p className="pl-2">
                  <span className="font-bold">Beat the eggs</span>: In a bowl,
                  beat the eggs with a pinch of salt and pepper until they are
                  well mixed. You can add a tablespoon of water or milk for a
                  fluffier texture.
                </p>
              </div>
              <div className="flex mt-2">
                <div className="text-[#854632]">2.</div>
                <p className="pl-2">
                  <span className="font-bold">Heat the pan</span>: Place a
                  non-stick frying pan over medium heat and add butter or oil.
                </p>
              </div>
              <div className="flex mt-2">
                <div className="text-[#854632]">3.</div>
                <p className="pl-2">
                  <span className="font-bold">Cook the omelette</span>: Once the
                  butter is melted and bubbling, pour in the eggs. Tilt the pan
                  to ensure the eggs evenly coat the surface.
                </p>
              </div>
              <div className="flex mt-2">
                <div className="text-[#854632]">4.</div>
                <p className="pl-2">
                  <span className="font-bold">Add fillings (optional)</span>:
                  When the eggs begin to set at the edges but are still slightly
                  runny in the middle, sprinkle your chosen fillings over one
                  half of the omelette.
                </p>
              </div>
              <div className="flex mt-2">
                <div className="text-[#854632]">5.</div>
                <p className="pl-2">
                  <span className="font-bold">Fold and serve</span>: As the
                  omelette continues to cook, carefully lift one edge and fold
                  it over the fillings. Let it cook for another minute, then
                  slide it onto a plate.
                </p>
              </div>
              <div className="flex mt-2">
                <div className="text-[#854632]">6.</div>
                <p className="pl-2">
                  <span className="font-bold">Enjoy</span>: Serve hot, with
                  additional salt and pepper if needed.
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-8" />
          <div className="pt-8">
            <h2 className="text-2xl text-[#854632] font-Young_Serif font-normal">
              Nutrition
            </h2>
            <p className="py-4 text-base">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <div className="flex justify-between mt-2 ">
              <span className="pl-8">Calories</span>
              <span className="font-bold md:mr-72 mr-16 text-[#854632]">
                277kcal
              </span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between mt-2">
              <span className="pl-8">Carbs</span>
              <span className="font-bold md:mr-72 mr-16 text-[#854632]">
                0g
              </span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between mt-2">
              <span className="pl-8">Protein</span>
              <span className="font-bold md:mr-72 mr-16 text-[#854632]">
                20g
              </span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between mt-2">
              <span className="pl-8">Fat</span>
              <span className="font-bold md:mr-72 mr-16 text-[#854632]">
                22g
              </span>
            </div>
            <hr className="my-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

/* 
# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Nutmeg: hsl(14, 45%, 36%)
- Dark Raspberry: hsl(332, 51%, 32%)

### Neutral

- White: hsl(0, 0%, 100%)
- Rose White: hsl(330, 100%, 98%)
- Eggshell: hsl(30, 54%, 90%)
- Light Grey: hsl(30, 18%, 87%)
- Wenge Brown: hsl(30, 10%, 34%)
- Dark Charcoal: hsl(24, 5%, 18%)

## Typography

### Body Copy

- Font size (paragraph): 16px

### Fonts

- Family: [Young Serif](https://fonts.google.com/specimen/Young+Serif)
- Weights: 400

- Family: [Outfit](https://fonts.google.com/specimen/Outfit)
- Weights: 400, 600, 700
 */

/* 
Simple Omelette Recipe

  An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
  to perfection, optionally filled with your choice of cheese, vegetables, or meats.

  Preparation time

  Total: Approximately 10 minutes
  Preparation: 5 minutes
  Cooking: 5 minutes

  Ingredients

  2-3 large eggs
  Salt, to taste
  Pepper, to taste
  1 tablespoon of butter or oil
  Optional fillings: cheese, diced vegetables, cooked meats, herbs

  Instructions

  Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
  You can add a tablespoon of water or milk for a fluffier texture.

  Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.

  Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
  the eggs evenly coat the surface.

  Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the 
  middle, sprinkle your chosen fillings over one half of the omelette.

  Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the 
  fillings. Let it cook for another minute, then slide it onto a plate.

  Enjoy: Serve hot, with additional salt and pepper if needed.

  Nutrition

  The table below shows nutritional values per serving without the additional fillings.

  Calories
  277kcal

  Carbs
  0g

  Protein
  20g

  Fat
  22g
*/
