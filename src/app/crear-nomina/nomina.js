'use client';
import { useUser } from '@/logic/hooks/useUser';
import { Wrapper } from '../components/Wrapper';
import { Header } from '../components/Header';
import { Button } from '../components/Buttons';
import { Input } from '../components/Input';


export default function nomina() {
  const { isFetching, data: user } = useUser();
  const [fileName, setFileName] = useState(undefined);

  if (isFetching) {
    return <p>Cargando...</p>;
  }
  if (user?.id) {
    return (
      <Wrapper>
        <div className="grid w-full p-2 overflow-hidden ">
          <Header className="overflow-hidden ">
            <h2>{"Crear nueva nomina"}</h2>
          </Header>
        </div>


        <form className='flex'>
          <Input label='Fecha inicial' name='fechaInicio' />
          <Input label='Fecha final' name='fechaFinal' />
        </form>
        <Button className="relative grid h-16 max-w-xs rounded-full place-content-center">
          <input
            className="absolute w-full px-6 py-2 not-italic text-center text-black uppercase transition-transform ease-in bg-white opacity-0"
            type="file"
            accept=".csv"
            required />
          {fileName ? 'Cargado' : 'Cargar archivo'}
        </Button>

      </Wrapper>
    );
  }
}
