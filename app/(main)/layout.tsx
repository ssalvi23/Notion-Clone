"use client";
import { Spinner } from "@/components/ui/spinner";
import { useConvexAuth } from "convex/react";
import { Navigation } from "./_components/navigation";
import { redirect } from "next/navigation";
import { Children } from "react";
import { SearchCommand } from "@/components/search-command";

const MainLayout = ( {
    children
}: { 
    children: React.ReactNode;
}) =>{

    const {isAuthenticated, isLoading}=useConvexAuth();

    if(isLoading){
        return(
            <div>
                <Spinner size="lg"/>
            </div>
        );
    }
    
    if(!isAuthenticated){
        return redirect("/");
    }

    return(
    <div className="h-full flex dark:bg-[#1F1F1F]">
       <Navigation/>
        <main className="flex-1 h-ful overflow-y-auto">
            <SearchCommand/>
        {children}
        </main>
    </div>
    );
}
 
export default MainLayout