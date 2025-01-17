import { MenuItem } from "./type";

const Menucard = (props: MenuItem) => {
    return (
      <div className="flex flex-col gap-2 p-4 text-center transition duration-100 bg-white rounded-lg shadow-lg hover:ease-in w-60 hover:shadow-2xl">
        <img src={props.image} alt={props.title + ' image'} className="flex items-center mb-2 rounded-md " />
        <p className="mb-1 text-lg font-semibold">{props.title}</p>
        <p className="mb-2 text-sm text-gray-600">{props.description}</p>
        <a href={props.link} className="text-[#AD343E] text-sm font-semibold hover:underline">Explore Menu</a>
      </div>
    )
  }

  
  export default Menucard;
  