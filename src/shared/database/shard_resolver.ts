import { ShardId } from "../types/shard_type.js";

export class ShardResolver{
    static getShardId(user_id:bigint|number):ShardId{
        const userIdNum=typeof user_id=='bigint'?Number(user_id):user_id;
        const shardID=(userIdNum%2)==0?ShardId.shard_1:ShardId.shard_2
        return shardID;
    }
    static getShardName(user_id:bigint|number):string{
        const shardId=this.getShardId(user_id);
        return (shardId==ShardId.shard_1)?'shard_1':'shard_2';
    }
    static AreOnSameShard(user_id1:bigint|number,user_id2:bigint|number):boolean{
        return this.getShardId(user_id1)==this.getShardId(user_id2);
    }
}