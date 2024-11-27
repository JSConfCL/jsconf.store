export const TextSection = () => {
  return (
    <section className="flex flex-col bg-white py-28">
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
          <strong>JSConf Chile está de vuelta!</strong> Durante casi una década,
          hemos construido una comunidad vibrante enfocada en
          <strong>tecnología, desarrollo, y JavaScript.</strong>
          {/* A través de Noders, SantiagoJS, NodeSchool, TechSchool, NodeBots y
            otras iniciativas, hemos creado espacios para aprender, compartir y
            crecer juntos. */}
          <br />
          <br />
          Este 2025, volvemos con más fuerza y tenemos grandes planes para el
          2025, Y para hacer esto posible, hemos creado una colección exclusiva
          de productos JSConf Chile que puedes adquirir, con lo que nos ayudas a
          financiar la conferencia y otras iniciativas.
          <br />
          <br />
        </p>
      </div>
    </section>
  );
};
