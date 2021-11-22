import React from 'react';

//components
import NutritionHeroCarousal from './NutritionHeroCarousal';
import NutritionCarousal from './NutritionCarousal';
import NutritionCard from './NutritionCard';

const Nutrition = () => {
    return (
        <div>
            <NutritionHeroCarousal/>
            <div className="my-6">
            <NutritionCarousal/>
            </div>
            <div className="flex justify-between flex-wrap">
                <NutritionCard bg="red" image="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" />
                <NutritionCard bg="red" image="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" />
                <NutritionCard bg="red" image="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" />
                <NutritionCard bg="red" image="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" />
                <NutritionCard bg="red" image="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" />
                <NutritionCard bg="red" image="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" />
                <NutritionCard bg="red" image="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" />
            </div>
        </div>
    )
}

export default Nutrition;
