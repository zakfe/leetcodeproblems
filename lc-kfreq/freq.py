class Solution(object):
    def topKFrequent(self, nums, k):
        c = {}
        for i in nums:
            c[i] = 1 + c.get(i, 0)
        
nums = [1,1,1,2,2,3]
k = 2