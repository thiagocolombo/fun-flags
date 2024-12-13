import Image from "next/image";

type CardProps = {
    index: number;
    flag: string;
    name: string;
    capital: string;
    region: string;
    population: number;
};
 
const Card = ({ index, name, flag, capital, region, population}: CardProps) => {
    return (
        <div className="h-full overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="aspect-video w-full">
                <Image 
                src={flag || "https://placehold.co/600x400"}
                alt={`Flag of ${name}`} 
                className="w-full h-full object-cover"
                width={500}
                height={300}
                priority={index < 12}
                />
            </div>
            <div className="p-6 text-sm text-gray-600">
                <h2 className="text-xl font-semibold mb-4">{name}</h2>
                <div className="space-y-2">
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">Capital:</span>
                        <span>{capital}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">Region:</span>
                        <span>{region}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">Population:</span>
                        <span>{population}</span>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Card;