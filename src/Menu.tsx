interface MenuProps { itemToView: string; setItemToView: (view: string) => void; }
const links = [["basic-info", "Home"], ["about-me", "About"], ["resume", "Résumé"]];
const Menu = ({ itemToView, setItemToView }: MenuProps) => (
  <nav className="main-nav" aria-label="Main navigation">
    {links.map(([id, label]) => <button key={id} className={itemToView === id ? "active" : ""} onClick={() => setItemToView(id)}>{label}</button>)}
  </nav>
);
export default Menu;
