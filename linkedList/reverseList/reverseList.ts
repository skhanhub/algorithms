const reverseList = (head) => {
    if (head == null || head.next == null) return head;

    let prev = null;
    let current = head;
    let next = head.next;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

export default reverseList;