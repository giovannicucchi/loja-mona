import Link from "next/link";
import { useRouter } from 'next/router'

const CategoryButtons = ({ categories = [] }) => {
  const router = useRouter()
  console.log('ROUTER', router)
  return (
    <div className="container flex flex-wrap mx-auto gap-2 mt-8">
      {categories.map((_category, index) => (
        <>

        {console.log('CONSOLÃO', _category, index)}
        <Link href={`/categories/${_category.slug}`} key={_category.id}>
          
          <a className="font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            style={{ background: router.query.slug === _category.slug || index === 0 && !router.query.slug ? 'var(--color-primary-4)' : "var(--color-primary-1)",
                    color:  router.query.slug === _category.slug || index === 0 && !router.query.slug  ? 'var(--color-primary-1)' : "var(--color-primary-4)" }}>
            {_category.name}
          </a>
        </Link>
        </>
      ))}
    </div>
  );
};

export default CategoryButtons;
