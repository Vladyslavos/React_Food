import React from "react";
import { Ingredient, MealType } from "../models";
import { motion } from "framer-motion";

interface IProps {
  label?: string;
  image: string;
  calories: number;
  ingredients: Ingredient[];
  ingredientLines: string[];
  title: string;
  mealType: MealType[];
}

export const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: any) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export default function Recipe({
  label,
  image,
  calories,
  ingredients,
  title,
  mealType,
}: IProps) {
  const [showRecipe, setShowRecipe] = React.useState<boolean>(false);
  return (
    <motion.div initial="hidden" whileInView="visible" className="recipe">
      <motion.h2 custom={1} variants={textAnimation}>
        {title}
      </motion.h2>
      <motion.p custom={2} variants={textAnimation}>
        {mealType}
      </motion.p>
      <motion.p custom={3} variants={textAnimation}>
        {calories.toFixed(2)} Calories
      </motion.p>
      <motion.img
        custom={4}
        variants={textAnimation}
        src={image}
        alt="dish image"
        className="image"
      />
      <motion.button
        custom={5}
        variants={textAnimation}
        onClick={() => setShowRecipe((prev) => !prev)}
        style={{
          backgroundColor: showRecipe ? "#571903" : "#2f3e12",
        }}
      >
        {showRecipe ? "Hide Recipe" : "Show Recipe"}
      </motion.button>
      {showRecipe && (
        <ol>
          {ingredients.map((ingredient: Ingredient, idx: number) => (
            <li key={idx}>{ingredient.text}</li>
          ))}
        </ol>
      )}
    </motion.div>
  );
}
