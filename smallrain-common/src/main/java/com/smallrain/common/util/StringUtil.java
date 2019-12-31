package com.smallrain.common.util;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 字符串操作工具类
 * @author wangying.dz3
 *
 */
public class StringUtil {
  
  /**
   * 判断字符串是否为空
   * @param cs
   * @return
   */
  public static boolean isEmpty(CharSequence cs) {
    return cs == null ||  cs.length() == 0;
  }
  
  public static boolean isNotEmpty(CharSequence cs) {
    return !isEmpty(cs);
  }
  
  /**
   * 判断字符串是为空或只包含空格
   * @param cs
   * @return
   */
  public static boolean isBlank(CharSequence cs) {
    int strLen;
    if (cs == null || (strLen = cs.length()) == 0) {
        return true;
    }
    for (int i = 0; i < strLen; i++) {  
        if (!Character.isWhitespace(cs.charAt(i))) {
            return false;
        }
    }
    return true;
}
  
  /**
   * 判断字符串不为空
   * @param cs
   * @return
   */
  public static boolean isNotBlank(CharSequence cs) {
    return !isBlank(cs);
}
  
  
  /**
   * pattern 缓存
   */
  private static LRUCache2<String,Pattern> PATTERN_CACHE = new LRUCache2<>(124);
  /**
   * 返回字符串中符合正则表达式的字符串列表
   * @param regex
   */
  public static List<String> matchList(String regex,String source) {
    List<String> result = new ArrayList<>();
    if(isBlank(regex) || isBlank(source))
      return result;
    Pattern pattern = PATTERN_CACHE.get(regex);
    if(null == pattern) {
      pattern = Pattern.compile(regex);
      PATTERN_CACHE.put(regex, pattern);
    }
    Matcher m = pattern.matcher(source);
    while (m.find()) {
      result.add(m.group(0));
    }
    return result;
  }
  
  
  
  
}
