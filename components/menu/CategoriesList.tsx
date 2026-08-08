"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CategoriesList({ categories }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  function handleClick(id) {
    const params = new URLSearchParams(searchParams);
    params.set("category", id);
    params.delete("page");
    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="filter-list">
      <div className="form-label">دسته بندی</div>
      {categories.map((category) => (
        <li
          key={category.id}
          onClick={() => handleClick(category.id)}
          className={
            searchParams.has("category") &&
            searchParams.get("category") == category.id
              ? "filter-list-active my-2"
              : "cursor-pointer"
          }
        >
          {category.name}
        </li>
      ))}
    </div>
  );
}
