import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color='red' onClick={() => console.log('Clicked')}>
      Asdasd
    </ChildAsFC>
  );
};

export default Parent;
