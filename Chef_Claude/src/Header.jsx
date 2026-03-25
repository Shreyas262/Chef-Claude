import chefClaudeLogo from '../src/assets/chef.png';

export default function Header() {
    return (
        <header className="title">
            <img src={chefClaudeLogo} alt="Chef Claude Logo" />
            <h1>Chef Claude</h1>
        </header>
    );
}