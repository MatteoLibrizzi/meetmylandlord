"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Gauge, MailIcon } from "lucide-react";

interface SearchResult {
  id: number;
  name: string;
  location: string;
  price: number;
  description: string;
  daysToVerify: number;
}

const countries = ["Luxembourg"].sort();

export default function ItemSearch() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [didSearch, setDidSearch] = useState<boolean>(false);

  const handleCountryChange = (e: string) => {
    setDidSearch(true);
    const mockResults: SearchResult[] = [
      {
        id: 1,
        name: "Matteo",
        location: e,
        price: 70,
        daysToVerify: 7,
        description: `Verify existence of any house in ${e} within 7 days. I will meet your landlord and send you videos of the house.`,
      },
    ];
    setResults(mockResults);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Where are you moving?
        </h1>
        <Select
          onValueChange={(e) => {
            handleCountryChange(e);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((result) => (
          <Card key={result.id}>
            <CardHeader>
              <CardTitle className="flex flex-row justify-between">
                <h1>{result.name}</h1>
                <p className="text-sm text-gray-500">{result.price} €</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="flex items-center text-sm text-gray-500 mb-2">
                <MapPin className="mr-2 h-4 w-4" />
                {result.location}
              </p>
              <p className="flex items-center text-sm text-gray-500 mb-2">
                <Gauge className="mr-2 h-4 w-4" />
                In {result.daysToVerify} Days
              </p>

              <p className="flex items-center border-t-2 text-sm text-gray-600 mb-2 pt-2">
                {result.description}
              </p>
              <a href="mailto:librizzimatteo.ml@gmail.com">
                <Button className="mt-4 w-full gap-2">
                  Contact <MailIcon className="mr-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {didSearch && results.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No results found. Try searching for an item.
        </p>
      )}
    </main>
  );
}
