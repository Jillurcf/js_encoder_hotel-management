import React from "react";
import { useSearchParams } from "react-router-dom";
import { categories } from "../Categories/CategoriesData";
import CategoryBox from "../Categories/CategoryBox";


const Category: React.FC<any> = () => {
    const [params, setParams] = useSearchParams();
 const category = params.get('category')

    return (
      
           <div className="pt-4 flex items-center justify-between overflow-x-auto">
           {categories.map(item=> <CategoryBox key={item.label} icon={item.icon} label={item.label}
           selected={category === item.label}
           ></CategoryBox>)}
           </div>
        
    );
};

export default Category;