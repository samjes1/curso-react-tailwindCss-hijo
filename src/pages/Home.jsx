import { useThemeStore } from "../store/useThemeStore";

export const Home = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <section className="bg-amber-50 h-screen dark:bg-primary-dark ">
      Hola, esto es Home
      <button className="p-2 rounded-lg flex bg-white dark:bg-black" onClick={toggleTheme}>
        {theme === "light" ? "☀️ Modo Claro" : "🌑Modo Oscuro"}
      </button>
    </section>
  );
};
