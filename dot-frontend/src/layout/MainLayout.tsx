import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./footer";

export default function MainLayout() {
  return (
    <>
      <div className="flex max-w-full mx-auto flex-col items-center justify-center py-2 min-h-screen">
        <Header />
        <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
          <Suspense
            fallback={
              <div className="d-flex justify-content-center align-items-center">
                Loading
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}
