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
import { MapPin, Gauge, MailIcon, ExternalLink } from "lucide-react";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";

interface SearchResult {
  id: number;
  country: string;
  contactLink: string;
  price: number;
  description: string;
  daysToVerify: number;
}

const countries = ["Luxembourg"].sort();

export default function ItemSearch() {
  const [didSearch, setDidSearch] = useState<boolean>(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const handleCountryChange = (e: string) => {
    setDidSearch(true);
    const mockResults: SearchResult[] = [
      {
        id: 1,
        country: e,
        contactLink: "/contact/luxembourg",
        price: 47,
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

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
        <div className="container mx-auto py-10">
          <Table>
            <TableHeader >
              {didSearch && <TableRow>
                <TableHead>Country</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Days to Verify</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Contact</TableHead>
              </TableRow>}
            </TableHeader>
            <TableBody>
              {results.map((result) => (
                <TableRow key={result.id}>
                  <TableCell>{result.country}</TableCell>
                  <TableCell>{result.price} €</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Gauge className="mr-2 h-4 w-4" />
                      {result.daysToVerify} Days
                    </div>
                  </TableCell>
                  <TableCell>{result.description}</TableCell>
                  <TableCell>
                    <Button asChild size="sm">
                      <a
                        href={result.contactLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Contact <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      {/* </div> */}

      {didSearch && results.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No results found. Try searching for an item.
        </p>
      )}
    </main>
  );
}
