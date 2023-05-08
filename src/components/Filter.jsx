import { useState, useEffect } from "react"

export default function Filter(){

    const [min, setMin] = useState(1000)
    const [max, setMax] = useState(6600)

    const brands = ['Samsung', 'Apple']

    const style = {
        left: `${min/15000 * 100}%`,
        right: `${100 - (max/15000 * 100)}%`
    }

    return (
        <section className="filter">
            <h4>Preço</h4>
            <div className="price-filter">
                <div className="price-container">
                    <span className="min-max-span">Min</span>
                    <span className="price">{`R$ ${min}`}</span>
                </div> 
                <div className="price-container">
                    <span className="min-max-span">Max</span>
                    <span className="price">{`R$ ${max}`}</span>
                </div>
            </div> 
            <div className="range-container">
                <div style={style} className="progress"></div>
                <input 
                    id="range-min" 
                    type="range" 
                    min={0} 
                    max={15000}
                    value={min}
                    onChange={e=> setMin(e.target.value)}/>
                <input 
                    id="range-max" 
                    type="range" 
                    min={0} 
                    max={15000}
                    value={max}
                    onChange={e=> setMax(e.target.value)}/>
            </div>
            <h4>Marca</h4>
            <ul className="brand-filter">
                {brands.map(item =>{
                    return(
                        <li key={item} className="brand">
                            <input type="checkbox" name="" id={item} />
                            <label htmlFor={item}>{item}</label>
                        </li>
                    )
                })}
            </ul>
            
        </section>
    )
}