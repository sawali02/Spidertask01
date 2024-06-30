export const recipes = [
    {
      id: '1',
      title: 'Tomato Soup',
      ingredients: ['Tomatoes', 'Onions', 'Garlic'],
      image: require('./recipes/tomatosoup.jpeg'), 
      procedure: [
        'Chop tomatoes and onions. Saute garlic in a pan. Add tomatoes and onions, cook until soft. Blend until smooth. Season to taste and serve.',
      ],
    },
    {
      id: '2',
      title: 'Garlic Bread',
      ingredients: ['Garlic', 'Butter', 'Bread'],
      image: require('./recipes/garlicbread.jpeg'), 
      procedure: [
        'Mix minced garlic with softened butter. Spread on sliced bread. Toast in oven until golden brown. Serve warm.',
      ],
    },
    {
      id: '3',
      title: 'Onion Rings',
      ingredients: ['Onions', 'Flour', 'Oil'],
      image: require('./recipes/onionrings.jpeg'),
      procedure: [
        'Slice onions into rings. Coat with flour. Deep fry until golden brown. Serve hot with dipping sauce.',
      ],
    },
    {
        id: '4',
        title: 'Chicken and Vegetable Stir-Fry',
        ingredients: ['Chicken', 'Tomatoes', 'Onions', 'Broccoli', 'Garlic' ,'Ginger'],
        image: require('./recipes/chicken and vegetable stir fry.jpeg'),
        procedure: [
          'Slice the chicken into thin strips. Chop the tomatoes, onions, and broccoli. Mince the garlic and ginger. Heat some oil in a pan and add the garlic and ginger. Sauté until fragrant. Add the chicken strips and cook until they are no longer pink. Add the onions, tomatoes, and broccoli to the pan and stir-fry until the vegetables are tender. Season with soy sauce, salt, and pepper to taste. Serve hot with rice or noodles.',
        ],
      },
      {
        id: '5',
        title: 'Spiced Vegetable Curry',
        ingredients: ['Potatoes' , 'Brinjal','Cabbage','Carrots',' Garlic','Ginger' , 'Turmeric','Cumin','Chili','Black Pepper'],
        image: require('./recipes/spiced vegetable curry.jpeg'),
        procedure: [
            'Peel and cube the potatoes and carrots. Dice the brinjal and cabbage. Mince the garlic and ginger.Heat some oil in a pot and add the garlic and ginger. Sauté until fragrant. Add the turmeric, cumin, chili, and black pepper. Stir well. Add the potatoes, carrots, brinjal, and cabbage to the pot and stir to coat with spices. Add enough water to cover the vegetables and bring to a boil. Reduce the heat and simmer until the vegetables are tender. Season with salt to taste. Serve hot with rice or bread',
        ],
      },
      {
        id: '6',
        title: 'Fruit Salad with Honey-Lime Dressing',
        ingredients: ['Apples', 'Bananas', 'Dragon', 'Fruit', 'Pineapple', 'Grapes', 'Orange','Strawberry','Avocado'],
        image: require('./recipes/fruit salad.jpeg'),
        procedure: [
            'Peel and dice the apples, bananas,dragon fruit, pineapple, and avocado. Halve the grapes and slice the strawberries. Peel and segment the orange. In a small bowl, whisk together some honey and lime juice. Combine all the fruits in a large bowl and drizzle with the honey-lime dressing. Toss gently to coat the fruits with the dressing. Serve immediately or chill before serving.',
        ],
      },
      {
        id: '7',
        title: 'Spicy Prawns with Garlic and Ginger',
        ingredients: ['Prawns', 'Garlic', 'Ginger', 'Chili', 'Oregano', 'Blackpepper'],
        image: require('./recipes/spicy prawns.jpeg'),
        procedure: [
            'Peel and devein the prawns. Mince the garlic and ginger. Heat some oil in a pan and add the garlic and ginger. Sauté until fragrant. Add the prawns to the pan and cook until they turn pink. Add the chili, oregano, and black pepper. Stir well to coat the prawns with spices. Season with salt to taste. Serve hot with a side of rice or salad.',
        ],
      },
  ];
  
  // Function to get recipes by selected ingredients
  export const getRecipesByIngredients = (ingredients) => {
    return recipes.filter((recipe) =>
      ingredients.every((ingredient) => recipe.ingredients.includes(ingredient))
    );
  };
  