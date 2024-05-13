import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Footer(){
    return(
        <>
        <footer className=" h-10 relative">
            <MaxWidthWrapper>
                <div className="border=t border-gray-200"/>
                <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
                    <div className="text-center md:text-left pb-e md:bp-0">
                        <p className="text-sm text-muted-foreground"> 
                        &copy;{new Date().getFullYear()} All tights reserved
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-8">
                            <Link href={"#"} className="text-sm text-muted-foreground hover:text-gray-600">Terms</Link>
                            <Link href={"#"} className="text-sm text-muted-foreground hover:text-gray-600">Privavy Policy</Link>
                            <Link href={"#"} className="text-sm text-muted-foreground hover:text-gray-600">Cooki Policy</Link>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
        </>
    )
}