import { useLoaderData } from '@modern-js/runtime/router';
import { NoSSR } from '@modern-js/runtime/ssr';

export interface Data {
  message: string;
}

export default () => {
  const data = useLoaderData();
  return (
    <div>
      {(data as Data).message}
      <NoSSR>
        <div>client content</div>
      </NoSSR>
    </div>
  );
};
