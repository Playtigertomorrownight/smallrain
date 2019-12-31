package com.smallrain.common.util;

import java.util.Collection;

/**
 * 集合工具类
 * @author wangying.dz3
 *
 */
public class CollectionUtil {

  public static boolean isEmpty(Collection<?> list) {
    return null == list || list.isEmpty();
  }
  
}
