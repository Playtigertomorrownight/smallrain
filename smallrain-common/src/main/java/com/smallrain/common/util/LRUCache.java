package com.smallrain.common.util;

import java.util.LinkedHashMap;
import java.util.Map;

public class LRUCache <T> {
  
  private Map<String, T> map;
  private final int capacity;

  public LRUCache(int capacity) {
      this.capacity = capacity;
      map = new LinkedHashMap<String, T>(capacity, 0.75f, true) {
          private static final long serialVersionUID = 5120826859912543103L;
          @Override
          protected boolean removeEldestEntry(Map.Entry<String, T> eldest) {
              return size() > capacity;  // 容量大于capacity 时就删除
          }
      };
  }
  
  public T get(String key) {
      return map.getOrDefault(key, null);
  }

  public void put(String key, T value) {
      map.put(key, value);
  }
  
  public int getCapacity() {
    return capacity;
  }
  
}
