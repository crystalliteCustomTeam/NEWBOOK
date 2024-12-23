"use client"
// Css
import style from "./our-work.module.css"
// React
import { useEffect, useState } from "react"
// Next
import Image from "next/image"

export default function OurWork() {
    const [data, setData] = useState([])

    const getDataHandle = async () => {
        try {
            const response = await fetch("/portfolio/our-work/data.json")
            if (response.status !== 200) {
                throw new Error('Failed to fetch data')
            }
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    useEffect(() => {
        getDataHandle()
    }, [setData])

    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className={style.content}>
                        <h2 className={style.title}>
                            Our Work.
                        </h2>
                        <p className={style.para}>
                            A collection of our favorite work, showcasing the innovative solutions we've delivered.
                        </p>
                    </div>
                    <div className={style._grids}>
                        {data && data.map(({ img, name, excerpt, link, category, service }, i) => (
                            <div key={i} className={`${style.cards} group`}>
                                <Image src={img} width={500} height={500} alt="domain" className={`${style._img} group-hover:rounded-xl group-hover:[boxShadow:_0px_10px_30px_rgba(0,_0,_0,_0.07)] group-hover:h-[350px]`} />
                                <div className={style._flex}>
                                    <h3 className={`${style.title} group-hover:opacity-100`}>{name}</h3>
                                    <div dangerouslySetInnerHTML={{
                                        __html: `<a href="${link}">
                                            <img src="portfolio/our-work/arrow.png" alt="domain" width="31" height="32" />
                                        </a>` }} />
                                </div>
                                <p className={`${style.para} group-hover:opacity-100`}>{excerpt}</p>
                            </div>
                        ))}
                    </div>
                    <button type="button" className={style.cta}>
                        Load More
                    </button>
                </div>
            </div>
        </section>
    )
}