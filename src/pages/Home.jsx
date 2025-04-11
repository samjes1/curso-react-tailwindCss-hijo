import { useThemeStore } from "../store/useThemeStore";
import { dataProyectos } from "../data/data";
import { CardMenu } from "../components/HomeComponents/CardMenu";
import { Icon } from "@iconify/react/dist/iconify.js";

export const Home = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <main className="bg-primary h-screen dark:bg-primary-dark flex flex-col items-center justify-center overflow-hidden">
      <section className="rounded-lg min-w-[450px]  ">
        <h1 className="text-black dark:text-white text-4xl font-bold mb-4 flex items-center gap-4">
          PROYECTOS
          <Icon icon="catppuccin:tailwind" width="40" height="40" />
        </h1>
        {dataProyectos.map((item, index) => {
          return <CardMenu key={item.id} item={item} index={index} />;
        })}
      </section>

      <button
        className="p-2 rounded-lg bg-white dark:bg-black text-black dark:text-white font-semibold"
        onClick={toggleTheme}>
        {theme === "light" ? "☀️ Modo Claro" : "🌑 Modo Oscuro"}
      </button>
    </main>
  );
};
