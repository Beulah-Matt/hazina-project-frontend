import { useEffect, useState } from "react";

const Stats = () => {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <section className="flex justify-center items-center flex-row flex-wrap bg-gray-700">
        {stats.map((stat) => (
            // console.log(stats)
            <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
                <h4 className="font-poppins font-semibold text-[30px] leading-[43px] text-white">{stat.value}</h4>
                <p className="font-poppins font-normal text-[15px] leading-[21px] text-cyan-700 uppercase ml-3">{stat.title}</p>
            </div>
        ))}
    </section>
  );
};

export default Stats;
