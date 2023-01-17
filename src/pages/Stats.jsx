import React from 'react'

const Stats = () => {

    const stats = [
        {
          "id": 1,
          "title": "Happy Clients",
          "value": "1.4k"
        },
        {
          "id": 2,
          "title": "Available Units",
          "value": "94"
        },
        {
          "id": 3,
          "title": "Locations",
          "value": "25"
        }
      ]
   return  (
        <section className="flex justify-center items-center flex-row flex-wrap bg-gray-900">
            {stats.map((stat) => (
                // console.log(stats)
                <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-3`}>
                    <h4 className="font-poppins font-semibold text-[30px] leading-[43px] text-white ml-4" >{stat.value}</h4>
                    <p className="font-poppins font-normal text-[15px] leading-[21px] text-sky-800 uppercase ml-3">{stat.title}</p>
                </div>
            ))}
        </section>
      );
}

export default Stats