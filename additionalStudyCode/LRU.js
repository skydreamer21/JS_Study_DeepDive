import { Node } from "./doublyLinkedList.js"
import { DoublyLinkedList } from "./doublyLinkedList.js"
import { getSearchResult } from "./crawling.js";

const MAX_KEYWORD = 5;

class Cache {
    constructor() {
        this.cache = new Map();
        this.list = new DoublyLinkedList();
        this.researchData = new Map();
    }
    
    set(keyword) {
        /*
         1. keyword가 map에 없다면 추가
         1-1. 5개가 꽉 차 있다면 제일 오래된 것 -> linkedList의 마지막 것을 지운다.
         2. keyword가 map에 있다면 LinkedList에서 삭제하고 맨 앞에 hitCount를 높여서 추가한다.     
        */
        
        if (!this.cache.has(keyword)) {
            if (this.list.size === MAX_KEYWORD) {
                this.cache.delete(this.list.tail.keyword);
                this.list.removeLast();
            }
            const newNode = new Node(keyword, 1);
            this.cache.set(keyword, newNode);
            this.list.addFirst(newNode);
        } else { // keyword를 가지고 있으면
            console.log("cache hit!");
            const prevHitCount = this.cache.get(keyword).hitCount;
            console.log(this.cache.get(keyword)); // debug
            this.cache.get(keyword).delete(this.list);
            const newNode = new Node(keyword, prevHitCount+1);
            this.cache.set(keyword, newNode);
            this.list.addFirst(newNode);
        }
    }

    // 필요한 메서드
    get(keyword) {
        // 있으면 보여주고 아니면 set으로 넘겼다 가져와서 출력
        // 일단은 출력만
        console.log("Keyword: "+keyword+" hitCount: "+this.cache.get(keyword).hitCount);
    }
}