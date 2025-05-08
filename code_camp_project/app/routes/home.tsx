import type { Route } from "./+types/home";
import { useRef, useState, useEffect } from 'react';

import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface BotData {
  // Define your data structure here
  id: string;
  pfp_url: string;
  name: string;
  description: string; 
  guidelines: string;
  // ... other fields
}


const HomeScreen = () => {
  // Sample data for the grid items, tutaj api i moovąć to niżej do miejsca renderowania żeby grabbowało wartosć z searchbara
  const [bots, setBots] = useState<BotData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/searchBots?search=wal');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Fetched data:', data);
        setBots(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Search Bots</h1>
      <pre>{JSON.stringify(bots, null, 2)}</pre>
    </div>
  );
  const gridItems = [
    {
      id: 1,
      title: "Pastel Sunrise",
      description: "Beautiful morning colors",
      image: "https://placehold.co/400x400",
    },
    {
      id: 2,
      title: "Soft Clouds",
      description: "Fluffy pastel clouds",
      image: "https://placehold.co/500x500",
    },
    {
      id: 3,
      title: "Minty Fresh",
      description: "Refreshing mint tones",
      image: "https://placehold.co/400x400",
    },
    {
      id: 4,
      title: "Lavender Dreams",
      description: "Calming purple hues",
      image: "https://placehold.co/400x400",
    },
    {
      id: 5,
      title: "Peachy Keen",
      description: "Warm peach tones",
      image: "https://placehold.co/400x400",
    },
    {
      id: 6,
      title: "Baby Blue",
      description: "Soft blue shades",
      image: "https://placehold.co/400x400",
    },
    {
      id: 7,
      title: "Rosy Glow",
      description: "Pink sunset colors",
      image: "https://placehold.co/400x400",
    },
    {
      id: 8,
      title: "Mint Chocolate",
      description: "Fresh and sweet",
      image: "https://placehold.co/400x400",
    },
    {
      id: 9,
      title: "Mint Chocolate",
      description: "Fresh and sweet",
      image: "https://placehold.co/400x400",
    },
    {
      id: 10,
      title: "Mint Chocolate",
      description: "Fresh and sweet",
      image: "https://placehold.co/400x400",
    },
    {
      id: 11,
      title: "Mint Chocolate",
      description: "Fresh and sweet",
      image: "https://placehold.co/400x400",
    },
    {
      id: 12,
      title: "Mint Chocolate",
      description: "Fresh and sweet",
      image: "https://placehold.co/400x400",
    },
  ];

  return (
    <div className="main-background min-h-full bg-[#9FB3DF]"> 
      <div className="content-wrapper mx-auto w-min-full overflow-y-auto h-min-full flex flex-col items-center">
        <div className="header w-full flex flex-row justify-between p-5 h-20">
          <img src="dwa" alt="jebane logo" />
          {/* Search Bar */}
          <div className="mb-8 w-[25%]">
            <Input
              type="text"
              placeholder="Search..."
              className="bg-white border-pink-200 focus:border-pink-300 shadow-sm"
            />
          </div>
        </div>
        

        {/* Grid List */}
        <div className="h-fill pr-2 w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gridItems.map((item) => (
              <Card
                key={item.id}
                className="bg-[#9EC6F3] border-[#9EC6F3] hover:border-[#aa90ed] border-2 transition-colors"
              >
                <CardContent className="p-0 flex" onClick={()=>{/* api request here */}}>
                  {/* Square Image - Left Side */}
                  <div className="w-1/3 flex-shrink-0">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Text Content - Right Side */}
                  <div className="p-3 flex-1">
                    <span className="font-bold text-[#ffD1DC] block mb-1">
                      {item.title}
                    </span>
                    <span className="text-sm text-[#FFF1D5]">
                      {item.description}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;