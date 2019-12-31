package com.smallrain.common.util;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;

/**
 * 线程安全的的 LRUCHAE
 * @author wangying.dz3
 *
 * @param <K>
 * @param <V>
 */
public class LRUCache2<K, V> {

  private final int maxSize;

  private ConcurrentHashMap<K, V> map;

  private ConcurrentLinkedQueue<K> queue;

  public LRUCache2(final int maxSize) {
    this.maxSize = maxSize;
    map = new ConcurrentHashMap<K, V>(maxSize);
    queue = new ConcurrentLinkedQueue<K>();
  }

  public void put(final K key, final V value) {
    if (map.containsKey(key)) {
      queue.remove(key);
    }
    while (queue.size() >= maxSize) {
      K oldestKey = queue.poll();
      if (null != oldestKey) {
        map.remove(oldestKey);
      }
    }
    queue.add(key);
    map.put(key, value);
  }

  public V get(final K key) {
    if (map.containsKey(key)) {
      queue.remove(key);
      queue.add(key);
    }
    return map.get(key);
  }
}