import { Card, Footer, Grid, Header } from "./components";

const countries = [
  {
    id: 1,
    country: "Brazil",
    capital: "Brasília",
    region: "South America",
    population: "213993437"
  },
  {
    id: 2,
    country: "Japan",
    capital: "Tokyo",
    region: "Asia",
    population: "125836021"
  },
  {
    id: 3,
    country: "Canada",
    capital: "Ottawa",
    region: "North America",
    population: "38005238"
  },
  {
    id: 4,
    country: "Germany",
    capital: "Berlin",
    region: "Europe",
    population: "83240525"
  },
  {
    id: 5,
    country: "Australia",
    capital: "Canberra",
    region: "Oceania",
    population: "25687041" 
  },
  {
    id: 6,
    country: "India",
    capital: "New Delhi",
    region: "Asia",
    population: "1393409038"
  },
  {
    id: 7,
    country: "Egypt",
    capital: "Cairo",
    region: "Africa",
    population: "104258327"
  },
  {
    id: 8,
    country: "Mexico",
    capital: "Mexico City",
    region: "North America",
    population: "126014024"
  }
];


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Grid>
          {countries.map(({ id, country, capital, region, population }) => (
              <Card
                key={id}
                country={country} 
                capital={capital} 
                region={region} 
                population={population}
              />
          ))}
        </Grid>
      </main>
      <Footer />
    </>
  );
}
