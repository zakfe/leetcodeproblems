nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]


class Solution(object):
    def threeSum(self, nums):
        nums = sorted(nums)
        print(nums)
        l, r = 1,   len(nums)-1
        sum = 0
        res_arr = []
        for i in range(len(nums)):
            l = i+1
            r = len(nums)-1
            while l < r:

                sum = nums[i] + nums[l] + nums[r]
                if sum == 0 :
                    
                    if [nums[i],nums[l],nums[r]] not in res_arr:
                        res_arr.append([nums[i],nums[l],nums[r]])
                    r= r-1
                    l= l+1
                        

                elif sum > 0:
                    r = r-1
                elif sum < 0:
                    l = l+1

        return res_arr
Solution().threeSum(nums)
