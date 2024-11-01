import Link from "next/link";
import TableData from '@/components/tabledata'
import { Suspense } from "react";
import {Spinner} from "@/components/spinner";

export default function Home() {
  return (
    <div className="w-screen h-[100vh] py-20 flex items-center flex-col">
        <div className="flex items-center justify-between gap-1 mb-5">
          <h1 className="text-4xl font-bold text-gray-300">
            Next & Laravel CRUD
          </h1>
        </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link className="btn btn-primary w-full " href="/user/create">
             Create User
          </Link>
        </div>
          <Suspense fallback={<Spinner />}>
              <TableData/>
          </Suspense>
      </div>
    </div>
  );
}
