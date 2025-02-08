import CursorEffect from "@/components/CursorEffect/CursorEffect";

export default function Home() {
  return (
    <main style={{
      margin: 0,
      padding: 0,
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <CursorEffect />
    </main>
  );
}
