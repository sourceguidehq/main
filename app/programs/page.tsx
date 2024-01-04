"use client"
import Programs from "@/comps/Programs";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button";
  import { Label } from "@/components/ui/label"
  import { Input } from "@/components/ui/input"
  import { CopyIcon } from "@radix-ui/react-icons"
  import { useEffect, useState } from "react";
  




export default function programs() {
    const [filterOption, setFilterOption] = useState("");
  
    const handleFilterChange = (newOption) => {
      setFilterOption(newOption);
    };
  
    return (
      <div>
        <section className="mx-4 ">
        <div className="container flex flex-col items-center gap-4 text-center">
        <h1 className="tracking-tight font-semibold text-2xl sm:text-5xl md:text-6xl lg:text-5xl mb-4 dark:text-white">
          Opensource Programs List
        </h1>
        <p className="max-w-[42rem] leading-normal dark:text-white text-muted-foreground sm:text-xl sm:leading-8">
        Discover a curated collection of diverse open source programs. Filter based on stipend availability and find opportunities that match your interests and skills.
        
        </p>
      </div>
        <Filter onFilterChange={handleFilterChange} />
        </section>
        <Programs filter_option={filterOption} />
      </div>
    );
  }
  
  function Filter({ onFilterChange }) {
    const [opt, setOpt] = useState("");
  
    useEffect(() => {
      // Call the callback function whenever opt changes
      onFilterChange(opt);
    }, [opt, onFilterChange]);
  
    return (
      <div className="dark:text-white dark:bg-[#09090B]">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Filters</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader className="dark:text-white ">
              <DialogTitle className="dark:text-white ">Filters</DialogTitle>
            </DialogHeader>
            <div className="flex items-center space-x-2">
            <DialogClose asChild>
              <Button size="sm" className="px-3" onClick={() => setOpt("Yes")}>
                <span className="sr-only">Copy</span>
                With stipend
              </Button>
              </DialogClose>
              
              

              <DialogClose asChild>

              <Button onClick={() => setOpt("No")} size="sm" className="px-3">
                <span className="sr-only">Copy</span>
                No stipend
              </Button>
              </DialogClose>

              <DialogClose asChild>
              <Button size="sm" className="px-3" onClick={() => setOpt("")}>
                <span className="sr-only">Copy</span>
                Default
              </Button>
              </DialogClose>

            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
  