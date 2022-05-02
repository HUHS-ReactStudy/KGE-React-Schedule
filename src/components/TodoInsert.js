import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState(''); // 인풋에 입력하는 값 관리

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []); // 컴포넌트가 리렌더링될 때마다 함수 새로 만들기 x. 한 번 만들고 재사용.

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // value값 초기화

      e.preventDefault(); // onSubmit 이벤트는 브라우저에서 새로고침을 발생시킴. 이를 방지하기 위해 이 함수 호출.
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
