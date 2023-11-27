export function makeMessage(role, content){
    return {
        role: role,
        content: content,
    };
}

export const getInitializeMessage = makeMessage('assistant', '안녕하세요. BizQuery.AI 입니다. 궁금한 내용을 물어보세요.');