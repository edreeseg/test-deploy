export default function Test({ title, time }) {
  return (
    <>
      <h1>{title}</h1>
      <span>{time}</span>
      <div>This the test page forreal.</div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'The time is',
      time: new Date().toISOString()
    }
  };
}