import SearchBarComponent from "./components/SearchBarComponent";
import SideBarComponent from "./components/SideBarComponent";

export default function BookCategoriesLayout({ children }) {
  return (
    <main className="flex flex-row bg-ghost-white">
      <SideBarComponent />
      <section className="flex flex-col mx-16 mt-10 flex-1">
        <SearchBarComponent />
        <article className="mt-5 rounded-t-[50px] bg-white">
          {children}
        </article>
      </section>
    </main>
  );
}