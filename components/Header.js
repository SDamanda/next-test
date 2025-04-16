import { headers } from "next/headers";

export default function Header() {
    return (
        <header style={{ backgroundColor: '#222', color: 'white', padding: '20px', textAlign: 'center' }}>
            <h1>MOTOLD</h1>
            <p>The best to you</p>
        </header>
    );
}