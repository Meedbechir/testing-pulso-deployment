const Sondages = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-sans">
      <div className="mt-24 flex flex-wrap justify-center gap-8 sm:flex-col sm:items-center h-full lg:flex-row lg:justify-center lg:items-center">
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-200 bg-opacity-75 m-2">
          <img
            className="w-full h-60"
            src="https://img.freepik.com/vecteurs-libre/illustration-du-concept-enquete-client_114360-558.jpg?w=740&t=st=1707156798~exp=1707157398~hmac=dd00876f7ac640aee4bb669e4cd6cf70bec42d2c1ade1dbbef74fa7358aecffa"
            alt="Img"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sondage sur la POO</div>
            <p className="text-gray-700 text-base">Description du Sondage</p>
          </div>
        </div>

        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-200 bg-opacity-75 m-2">
          <img
            className="w-full h-60"
            src="https://img.freepik.com/vecteurs-libre/groupe-personnes-detenant-icones-point-interrogation_53876-64627.jpg?w=740&t=st=1707156993~exp=1707157593~hmac=609d842f62eb768a00aac161897504e0ca6ed7cd659daef3c8c29983e604e26c"
            alt="Img"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sondage sur les IDE</div>
            <p className="text-gray-700 text-base">Description du Sondage</p>
          </div>
        </div>

        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-200 bg-opacity-75 m-2">
          <img
            className="w-full h-60"
            src="https://img.freepik.com/vecteurs-libre/groupe-personnes-detenant-icones-point-interrogation_53876-64627.jpg?w=740&t=st=1707156993~exp=1707157593~hmac=609d842f62eb768a00aac161897504e0ca6ed7cd659daef3c8c29983e604e26c"
            alt="Img"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Sondage sur les frameworks
            </div>
            <p className="text-gray-700 text-base">Description du Sondage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sondages;
