// pages/index.js
export async function getStaticProps() {
    const items = [/* data from JSON file */];
    return { props: { items } };
}

export default function Home({ items }) {
    return (
        <div>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
// CQ: getStaticProps generates content at build time, ideal for pages that don't change often. getServerSideProps generates content on each request, better for pages that need up-to-date data.
