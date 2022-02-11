package com.Gavin.util;

import java.util.UUID;

public class IdUtil {
    private IdUtil(){};

    public static String getUUId(){
            UUID uuid = UUID.randomUUID();
            String str = uuid.toString();
            String uuidStr = str.replace("-", "");
            return uuidStr;
    }
}
