# 테스트 주도 개발 (Test Driven Development) 이해하기

**테스트 주도 개발**(Test Driven Development, TDD)은 코드를 작성하기 전에 테스트를 먼저 작성하고, 테스트를 통과할 수 있는 최소한의 코드를 구현하는 방식으로 진행된다. 이 과정은 일반적으로 **Red-Green-Refactor** 단계로 반복된다.

1. **Red 단계**: 실패하는 테스트를 작성한다. 이때 테스트가 실패하는 것이 정상이다.
2. **Green 단계**: 테스트를 통과할 수 있는 최소한의 코드를 작성해 테스트가 성공하도록 한다.
3. **Refactor 단계**: 테스트가 성공하면, 중복 코드 제거나 코드 구조 개선 등의 리팩토링을 진행한다.

이러한 과정을 반복함으로써 코드는 요구사항을 충족하고, 유지보수성이 높은 구조로 개발된다.

## React에서 TDD 예제

React 컴포넌트에 TDD를 적용한 간단한 예제이다. 카운터 컴포넌트에서 버튼을 클릭할 때마다 카운트가 증가하는 기능을 테스트 주도 개발 방식으로 구현한다.

### Red 단계: 테스트 작성

먼저, 요구사항에 따라 컴포넌트가 정상적으로 작동하는지 검증할 테스트를 작성한다. 
카운터의 초기값이 0인지, 버튼을 클릭할 때마다 카운트가 증가하는지를 확인하는 테스트이다.

```javascript
// Counter.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('초기 카운트는 0이다', () => {
  render(<Counter />);
  const countElement = screen.getByText(/카운트: 0/i);
  expect(countElement).toBeInTheDocument();
});

test('버튼 클릭 시 카운트가 증가한다', () => {
  render(<Counter />);
  const buttonElement = screen.getByRole('button', { name: /증가/i });
  fireEvent.click(buttonElement);
  expect(screen.getByText(/카운트: 1/i)).toBeInTheDocument();
});
```

### Green 단계: 최소한의 코드 작성

작성한 테스트를 통과시키기 위해 필요한 최소한의 코드를 작성한다. 
useState를 사용하여 카운트 상태를 관리하고, 버튼을 클릭할 때마다 카운트를 증가시키도록 힌다.

```javascript
// Counter.js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

export default Counter;
```

### Refactor 단계: 코드 개선
테스트가 모두 통과하면, 코드의 중복을 제거하거나 가독성을 높이는 등의 리팩토링을 진행한다. 
테스트가 있기 때문에 리팩토링 후에도 코드의 안정성이 보장된다.

## TDD의 장점
- 버그 예방: 테스트가 명확한 요구사항을 정의하므로, 사전에 버그를 예방할 수 있다.
- 리팩토링 용이성: 테스트가 코드의 기능을 보장하므로, 코드 리팩토링 시 안정성이 유지된다.
- 품질 향상: 요구사항을 충족하는 테스트를 통해 더 나은 품질의 코드를 작성할 수 있다.

테스트 주도 개발(TDD)은 React 애플리케이션의 품질을 높이고, 코드 유지보수를 더 쉽게 할 수 있는 방법이다. React와 같은 컴포넌트 기반의 라이브러리에서는 TDD를 통해 컴포넌트별 요구사항을 명확히 정의하고, 코드 품질을 높이는 데 큰 도움이 된다.
